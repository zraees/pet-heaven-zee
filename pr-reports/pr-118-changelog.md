## Summary
- Update accordion content text size to large. 
  Author: zraees, branch head → main, 1 file/1 commit.
  Top risks (if any): None.

## Detailed Changes (per file)
### **src/Components/Accordion.tsx** — *modified*, +1/-1*. 
  - Change text size of accordion content to large by updating the `text-lg` class in the accordion content div.
    ```diff
@@ -19,7 +19,7 @@ const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
         {isOpen ? <FaMinus className="text-gray-900" /> : <FaPlus className="text-gray-900" />}
       </button>
       {isOpen && (
-        <div className="p-4 bg-gray-3 rounded-b-lg text-gray-700 text-sm">
+        <div className="p-4 bg-gray-3 rounded-b-lg text-gray-700 text-lg">
           <p>{content}</p>
         </div>
       )}
    ```

## Images changed
No images were changed.

## Discussion signals
- Issue comments: 0
- Reviews: 0
- Inline review comments: 0

## Next Steps
No action needed.