## Summary
- Create MainModal.tsx file with 68 additions and no deletions.
- AliSubhani1, branch head → ali/n8n-changes, number of files/commits: 1/1.
- No top risks identified.

## Detailed Changes (per file)
### **MainModal.tsx** — *added*, +68/-0*.
Create a new MainModal component with React hooks for modal functionality and styling.

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
No images were changed in this pull request.

## Discussion signals
- Issue comments: 0
- Reviews: 0
- Inline review comments: 0

## Next Steps
No action needed.