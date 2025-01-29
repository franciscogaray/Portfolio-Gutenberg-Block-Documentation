# Portfolio Gutenberg Block Documentation

## Overview
The **Portfolio Block** is a custom Gutenberg block designed to showcase portfolio items on a WordPress website. Each portfolio item consists of a title, description, and an image. The block allows users to add, edit, and remove portfolio items dynamically within the Gutenberg editor.

---

## Features
- **Add Portfolio Items**: Users can add multiple portfolio items to the block.
- **Edit Portfolio Items**: Each portfolio item can be customized with a title, description, and image.
- **Remove Portfolio Items**: Users can remove unwanted portfolio items.
- **Responsive Grid Layout**: Portfolio items are displayed in a responsive grid layout on the front end.

---

## Block Attributes
The block has the following attribute:

- **`portfolioItems`** (Array):  
  An array of portfolio items. Each item contains the following properties:
  - `title` (String): The title of the portfolio item.
  - `description` (String): The description of the portfolio item.
  - `mediaId` (Number): The ID of the uploaded image.
  - `mediaUrl` (String): The URL of the uploaded image.

---

## Block Structure

### 1. **Block Registration**
The block is registered using the `registerBlockType` function from the `@wordpress/blocks` package. It is assigned the following properties:
- **Title**: `Portfolio Block`
- **Icon**: `portfolio`
- **Category**: `widgets`

### 2. **Edit Component**
The `edit` function defines how the block behaves and appears in the Gutenberg editor. It includes the following functionality:
- **Adding Portfolio Items**: A button allows users to add new portfolio items.
- **Editing Portfolio Items**: Users can edit the title and description using `RichText` components and upload/replace images using the `MediaUpload` component.
- **Removing Portfolio Items**: A button allows users to remove individual portfolio items.

### 3. **Save Component**
The `save` function defines how the block content is saved and rendered on the front end. Portfolio items are displayed in a responsive grid layout.

---

## Code Explanation

### Imports
The block imports the following dependencies:
- `registerBlockType`: Registers the block with Gutenberg.
- `useBlockProps`, `RichText`, `MediaUpload`, `MediaUploadCheck`: Gutenberg components for block properties, rich text editing, and media upload functionality.
- `Button`: A reusable button component from the `@wordpress/components` package.
- `__`: Internationalization function for translating strings.

### Block Registration
```javascript
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
    ...
});
```

### Edit Component
The `edit` function handles the block's behavior in the editor:
- **Adding Items**: The `addPortfolioItem` function appends a new item to the `portfolioItems` array.
- **Updating Items**: The `updatePortfolioItem` function updates specific properties of a portfolio item.
- **Removing Items**: The `removePortfolioItem` function removes a portfolio item from the array.
- **Rendering**: The block renders a list of portfolio items with editable fields and media upload options.

### Save Component
The `save` function defines how the block content is saved and displayed on the front end:
- Portfolio items are rendered in a responsive grid layout using CSS Grid.

---

## Usage

### Adding the Block
1. In the Gutenberg editor, click the **"+"** button to add a new block.
2. Search for **"Portfolio Block"** and select it.
3. The block will appear with an empty state, ready for portfolio items to be added.

### Adding Portfolio Items
1. Click the **"Add Portfolio Item"** button to create a new item.
2. Enter a title and description using the provided text fields.
3. Upload an image by clicking the **"Upload Image"** button.

### Editing Portfolio Items
1. Click on the title or description to edit the text.
2. To replace an image, click the **"Replace Image"** button and select a new image.

### Removing Portfolio Items
1. Click the **"Remove Item"** button to delete a portfolio item.

---

## Front-End Display
On the front end, the portfolio items are displayed in a responsive grid layout. Each item includes:
- An image (if uploaded).
- A title.
- A description.

---

## Example Output
```html
<div class="wp-block-my-custom-block-portfolio-block">
    <h2>Portfolio</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
        <div style="border: 1px solid #ddd; padding: 10px;">
            <img src="image-url.jpg" alt="Project Title" style="max-width: 100%; height: auto;">
            <h3>Project Title</h3>
            <p>Project Description</p>
        </div>
        <!-- Additional portfolio items -->
    </div>
</div>
```

---

## Customization
- **Styling**: Customize the block's appearance by adding CSS to your theme or plugin.
- **Functionality**: Extend the block by adding additional fields (e.g., links, categories) or integrating with external APIs.

---

## Dependencies
- WordPress 5.0+ (Gutenberg editor)
- React (used internally by Gutenberg)

---

## Support
For assistance or feature requests, please contact the block developer or refer to the official [Gutenberg Handbook](https://developer.wordpress.org/block-editor/).

---

This documentation provides a comprehensive guide to using and understanding the **Portfolio Gutenberg Block**.
