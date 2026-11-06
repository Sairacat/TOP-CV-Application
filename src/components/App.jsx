import { useState } from "react";
import "../styles/App.css";
import { Greeting } from "./Greeting.jsx";
import { Selection } from "./Selection.jsx";
import { Form } from "./Form.jsx";
import { Result } from "./Result.jsx";

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const [template, setTemplate] = useState(null);
  const [infos, setInfos] = useState({
    general: [{ id: crypto.randomUUID(), isSaved: false, savedValue: null }],
    education: [{ id: crypto.randomUUID(), isSaved: false, savedValue: null }],
    career: [{ id: crypto.randomUUID(), isSaved: false, savedValue: null }],
    cert: [{ id: crypto.randomUUID(), isSaved: false, savedValue: null }],
  });

  function forwardPage() {
    setPageIndex(pageIndex + 1);
  }

  function backwardPage() {
    setPageIndex(pageIndex - 1);
  }

  function updateTemplate(layout) {
    setTemplate(layout);
  }

  function saveSection(id, info, type) {
    setInfos((prev) => ({
      ...prev,
      [type]: prev[type].map((field) => {
        if (field.id === id) {
          return { ...field, isSaved: true, savedValue: { ...info } };
        } else {
          return field;
        }
      }),
    }));
  }

  function editSection(id, type) {
    setInfos((prev) => ({
      ...prev,
      [type]: prev[type].map((field) => {
        if (field.id === id) {
          return { ...field, isSaved: false };
        } else {
          return field;
        }
      }),
    }));
  }

  function addSection(type) {
    setInfos((prev) => ({
      ...prev,
      [type]: [
        ...prev[type],
        { id: crypto.randomUUID(), isSaved: false, savedValue: null },
      ],
    }));
  }

  function removeSection(id, type) {
    setInfos((prev) => ({
      ...prev,
      [type]: prev[type].filter((field) => field.id !== id),
    }));
  }

  function checkForm() {
    let hasError = false;

    const keys = Object.keys(infos);

    for (const key of keys) {
      const info = infos[key];
      if (info.length === 0) {
        continue;
      }

      const hasUnsavedSection = info.some((field) => !field.isSaved);
      if (hasUnsavedSection) {
        hasError = true;
        break;
      }
    }

    return hasError;
  }

  return (
    <div>
      {pageIndex === 0 && <Greeting handleForward={forwardPage} />}
      {pageIndex === 1 && (
        <Selection
          handleForward={forwardPage}
          handleBackward={backwardPage}
          updateTemplate={updateTemplate}
          templateIndex={template}
        />
      )}
      {pageIndex === 2 && (
        <Form
          handleBackward={backwardPage}
          handleForward={forwardPage}
          infos={infos}
          onSave={saveSection}
          onEdit={editSection}
          onAdd={addSection}
          onRemove={removeSection}
          checkForm={checkForm}
        />
      )}
      {pageIndex === 3 && <Result infos={infos} template={template} />}
    </div>
  );
}

export { App };
