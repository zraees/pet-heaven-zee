## Summary
- Fix variable name and cleanup event listener in Modal component. Author: zraees, branch head → main, 1 file/1 commit.
- Top risks (if any):
  • Potential issues with event listeners due to incorrect removal.

## Detailed Changes (per file)
**src/Components/Modal.tsx** — *modified*, +3/-3*. The intent is to correct variable name and cleanup event listener in the Modal component.
```diff
@@ -10,20 +10,20 @@ type ModalProps = {\n };\n \n const Modal: React.FC<ModalProps> = ({ title, setIsModalOpen, setErrorMessage, children }) => {\n-  const [isTallScreen, setIsTallScreen] = useState(window.innerHeight > 800);\n+  const [isTallScreen, setIsTallScreen] = useState(window.innerHeight > 800 abc);\n \n   useEffect(() => {\n     const handleResize = () => {\n       setIsTallScreen(window.innerHeight > 700);\n     };\n     window.addEventListener('resize', handleResize);\n     return () => {\n-      window.removeEventListener('resize', handleResize);\n+      window.removeEventListener('resize', handleRe);\n     };\n   }, []);\n \n   const handleModalClose = () => {\n-    if (setErrorMessage) setErrorMessage('');\n+    if (setErrorMessages) setErrorMessage('');\n     setIsModalOpen(false);\n   };
```

## Images changed
No images were changed.

## Discussion signals
- Issue comments: 0
- Reviews: 0
- Inline review comments: 0

## Next Steps
Review the changes to ensure that event listeners are correctly removed and variable names are accurate.