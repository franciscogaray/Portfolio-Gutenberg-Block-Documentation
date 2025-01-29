import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

registerBlockType('my-custom-block/portfolio-block', {
    title: __('Portfolio Block', 'my-custom-block'),
    icon: 'portfolio',
    category: 'widgets',
    attributes: {
        portfolioItems: {
            type: 'array',
            default: [],
        },
    },

    edit: (props) => {
        const { attributes, setAttributes } = props;
        const { portfolioItems } = attributes;
        const blockProps = useBlockProps();

        const addPortfolioItem = () => {
            const newItem = {
                title: '',
                description: '',
                mediaId: null,
                mediaUrl: '',
            };
            setAttributes({ portfolioItems: [...portfolioItems, newItem] });
        };

        const updatePortfolioItem = (index, key, value) => {
            const updatedItems = [...portfolioItems];
            updatedItems[index][key] = value;
            setAttributes({ portfolioItems: updatedItems });
        };

        const removePortfolioItem = (index) => {
            const updatedItems = portfolioItems.filter((_, i) => i !== index);
            setAttributes({ portfolioItems: updatedItems });
        };

        return (
            <div {...blockProps}>
                <h2>{__('Portfolio', 'my-custom-block')}</h2>
                {portfolioItems.map((item, index) => (
                    <div key={index} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
                        <RichText
                            tagName="h3"
                            placeholder={__('Enter title...', 'my-custom-block')}
                            value={item.title}
                            onChange={(value) => updatePortfolioItem(index, 'title', value)}
                        />
                        <RichText
                            tagName="p"
                            placeholder={__('Enter description...', 'my-custom-block')}
                            value={item.description}
                            onChange={(value) => updatePortfolioItem(index, 'description', value)}
                        />
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={(media) => {
                                    updatePortfolioItem(index, 'mediaId', media.id);
                                    updatePortfolioItem(index, 'mediaUrl', media.url);
                                }}
                                allowedTypes={['image']}
                                value={item.mediaId}
                                render={({ open }) => (
                                    <Button onClick={open} variant="secondary">
                                        {item.mediaUrl ? __('Replace Image', 'my-custom-block') : __('Upload Image', 'my-custom-block')}
                                    </Button>
                                )}
                            />
                        </MediaUploadCheck>
                        {item.mediaUrl && (
                            <img
                                src={item.mediaUrl}
                                alt={item.title}
                                style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }}
                            />
                        )}
                        <Button onClick={() => removePortfolioItem(index)} isDestructive>
                            {__('Remove Item', 'my-custom-block')}
                        </Button>
                    </div>
                ))}
                <Button onClick={addPortfolioItem} variant="primary">
                    {__('Add Portfolio Item', 'my-custom-block')}
                </Button>
            </div>
        );
    },

    save: (props) => {
        const { attributes } = props;
        const { portfolioItems } = attributes;
        const blockProps = useBlockProps.save();

        return (
            <div {...blockProps}>
                <h2>{__('Portfolio', 'my-custom-block')}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    {portfolioItems.map((item, index) => (
                        <div key={index} style={{ border: '1px solid #ddd', padding: '10px' }}>
                            {item.mediaUrl && (
                                <img
                                    src={item.mediaUrl}
                                    alt={item.title}
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                />
                            )}
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    },
});
