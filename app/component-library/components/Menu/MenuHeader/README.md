# MenuHeader

MenuHeader is a Header component specifically used for Menus.

## Props

This component extends [MenuHeaderProps](../../Header/Header.types.ts) component.

### `onBack`

Optional function to trigger when pressing the back button.

| <span style="color:gray;font-size:14px">TYPE</span> | <span style="color:gray;font-size:14px">REQUIRED</span> |
| :-------------------------------------------------- | :------------------------------------------------------ |
| Function                                    | No                                                     |

### `onClose`

Optional function to trigger when pressing the back button.

| <span style="color:gray;font-size:14px">TYPE</span> | <span style="color:gray;font-size:14px">REQUIRED</span> |
| :-------------------------------------------------- | :------------------------------------------------------ |
| Function                                    | No                                                     |

## Header Props

### `children`

Content to wrap to display.

| <span style="color:gray;font-size:14px">TYPE</span> | <span style="color:gray;font-size:14px">REQUIRED</span> |
| :-------------------------------------------------- | :------------------------------------------------------ |
| string | ReactNode                                    | Yes                                                     |

### `startAccessory`

Optional prop to include content to be displayed before the title.

| <span style="color:gray;font-size:14px">TYPE</span> | <span style="color:gray;font-size:14px">REQUIRED</span> |
| :-------------------------------------------------- | :------------------------------------------------------ |
| ReactNode                                           | No                                                     |

### `endAccessory`

Optional prop to include content to be displayed after the title.

| <span style="color:gray;font-size:14px">TYPE</span> | <span style="color:gray;font-size:14px">REQUIRED</span> |
| :-------------------------------------------------- | :------------------------------------------------------ |
| ReactNode                                           | No                                                     |


## Usage

```javascript
// MenuHeader with String title
<MenuHeader 
  onBack={()=> {}}
  onClose={()=> {}}>
  {SAMPLE_TITLE_STRING}
</MenuHeader>;

// MenuHeader with custom title
<MenuHeader 
  onBack={()=> {}}
  onClose={()=> {}}>
  {CUSTOM_TITLE_NODE}
</MenuHeader>;
```
