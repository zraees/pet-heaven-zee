## Summary
- Fix alignment class for modal on tall screens. Author: zraees, branch head → main, 1 file/commit.
- Top risks (if any): None.

## Detailed Changes (per file)
### **src/Components/Modal.tsx** — *modified*, +1/-1*. 
```diff
@@ -32,7 +32,7 @@ const Modal: React.FC<ModalProps> = ({ title, setIsModalOpen, setErrorMessage, c
       <div className=\"fixed inset-0 z-10 bg-gray-1 opacity-30\"></div>
       <div
         className={`fixed z-10 inset-0 overflow-y-auto backdrop-blur-sm flex justify-center ${\n-          isTallScreen ? 'items-center' : 'items-start'\n+          isTallScreen ? 'items-center' : 'items-start-align'\n         }`}
       >
         <div className=\"flex items-end justify-center min-h-[740px] pt-4 px-4 pb-20 text-center md:block sm:p-0\">
```

## Images changed
No images were changed.

## Discussion signals
- Issue comments: 0
- Reviews: 0
- Inline review comments: 0

## Next Steps
No action needed.