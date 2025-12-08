## Summary
- Add ExtendedModel component for modal functionality. 
  Author: zraees, branch head → main, 1 file/1 commit.
  Top risks:
  • New code without review may introduce bugs or security vulnerabilities.

## Detailed Changes (per file)
### **src/Components/ExtendedModel.tsx** — *added*, +68/-0*
The ExtendedModel component is added for modal functionality. It includes a modal dialog with a title, close button, and optional error message.
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
+      <div className="fixed inset-0 z-10 bg-gray-1 opacity-30"></div>
+      <div
+        className={`fixed z-10 inset-0 overflow-y-auto backdrop-blur-sm flex justify-center ${isTallScreen ? 'items-center' : 'items-start'}`}
+      >
+        ...
```

## Images changed
No images were changed in this pull request.

## Discussion signals
- Issue comments: 0
- Reviews: 0
- Inline review comments: 0

## Next Steps
Review the new code for modal functionality and ensure it meets the project's standards.