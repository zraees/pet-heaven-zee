## Summary
- Add subtitle to Modal component. Author: zraees, branch head → main, 1 file/commit.
- Top risks (if any): None.

## Detailed Changes (per file)
### **src/Components/Modal.tsx** — *modified*, +1/-0*. 
Add a subtitle in the Modal component.
```diff
@@ -47,6 +47,7 @@ const Modal: React.FC<ModalProps> = ({ title, setIsModalOpen, setErrorMessage, c
           <div className="inline-block align-bottom bg-white-0 rounded-lg text-left shadow-3xl transform transition-all min-w-80 md:min-w-[40rem] md:my-8 md:align-middle py-4 px-6 md:py-8 md:px-10">
             <div className="flex justify-between items-center bg-white-0">
               <h3 className="text-xl leading-6 poppins-700 text-gray-900">{title}</h3>
+              <h4>This is a subtitle!</h4>
               <div className="absolute bg-gray-50 top-4 right-4">
                 <button onClick={handleModalClose}>
                   <img
```

## Images changed
None.

## Discussion signals
- Issue comments: 0
- Reviews: 0
- Inline review comments: 0

## Next Steps
No action needed.