## Summary
- Add ExtendedModel component for modal functionality, 1 file/1 commit.
- Author: zraees, branch head → main.

## Detailed Changes (per file)
### **src/Components/ExtendedModel.tsx** — *added*, +68/-0*.
This PR adds a new TypeScript file to extend model functionality. The `Modal` component is defined with props for title, set modal open, and optional error message. It includes event handling for window resize and modal close.

```diff
@@ -0,0 +1,68 @@
+import React, { useEffect, useState } from 'react';
+import CancelIcon from '../Assets/CrossIcon.svg';

+type ModalProps = {
+  title: string;
+  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
+  setErrorMessage?: React.Dispatch<React.SetStateAction<string>>;
+
+  children?: React.ReactNode;
+};

+const Modal: React.FC<ModalProps> = ({ title, setIsModalOpen, setErrorMessage, children }) => {
+  const [isTallScreen, setIsTallScreen] = useState(window.innerHeight > 800);

+  useEffect(() => {
+    const handleResize = () => {
+      setIsTallScreen(window.innerHeight > 700);
+    };
+    window.addEventListener('resize', handleResize);
+    return () => {
+      window.removeEventListener('resize', handleResize);
+    };
+  }, []);

+  const handleModalClose = () => {
+    if (setErrorMessage) setErrorMessage('');
+    setIsModalOpen(false);
+  };

+  return (
+    <>
      <div className="fixed inset-0 z-10 bg-gray-1 opacity-30"></div>
      <div
        className={`fixed z-10 inset-0 overflow-y-auto backdrop-blur-sm flex justify-center ${isTallScreen ? 'items-center' : 'items-start'}`}
      >
```

## Images changed
No images were modified in this PR.

## Discussion signals
- Issue comments: 0
- Reviews: 0
- Inline review comments: 0

## Next Steps
Review the new `ExtendedModel` component for modal functionality.