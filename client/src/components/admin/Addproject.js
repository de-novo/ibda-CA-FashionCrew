import axios from "axios";
import { useState } from "react";

function Addproject(props) {
  let [img, imgSet] = useState();
  let [concept, conceptSet] = useState();
  let [periodStart, periodStartSet] = useState();
  let [periodEnd, periodEndSet] = useState();

  const on_imgHandler = (e) => {
    imgSet(e.currentTarget.files[0]);
  };

  const on_conceptHandler = (e) => {
    conceptSet(e.currentTarget.value);
  };

  const on_periodStartHandler = (e) => {
    periodStartSet(e.currentTarget.value);
  };

  const on_periodEndHandler = (e) => {
    periodEndSet(e.currentTarget.value);
  };

  const on_submitHandler = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", concept);
    formData.append("color", 'darkred');
    formData.append(" textColor", 'white');
    formData.append("img", img);

    
    formData.append("concept", concept);
    formData.append("start", periodStart);
    formData.append("end", periodEnd);

    let hasimg = formData.get("img") !== "undefined";
    let hasConcept = formData.get("concept") !== "undefined";
    let hasPeriodStart = formData.get("periodStart") !== "undefined";
    let hasperiodEnd = formData.get("periodEnd") !== "undefined";

    if (hasimg && hasConcept && hasPeriodStart && hasperiodEnd) {
      axios
        .post("/api/admin/project", formData)
        .then((res) => {
          console.log("Add project");
        })
        .catch((err) => {
          console.log("error:", err);
        });
        props.upload.setUploadTrigger(!props.upload.uploadTrigger)
    } else {
      alert("모든칸을 채워주세요");
    }
  };

  return (
    <div className="adminbox" id="add-project">
      <form>
        <div>
          <p>Thumnail Img</p>
          <input className="input" type="file" onChange={on_imgHandler}></input>
        </div>
        <div>
          <p>Concept</p>
          <input className="input" type="text" placeholder="concept" onChange={on_conceptHandler}></input>
        </div>
        <div>
          <p>Project Period - Start</p>
          <input className="input" type="date" onChange={on_periodStartHandler}></input>
        </div>
        <div>
          <p>Project Period - End</p>
          <input className="input" type="date" onChange={on_periodEndHandler}></input>
        </div>

        <button type="submit" className="submitbtn" onClick={on_submitHandler}>
          {" "}
          Add Project{" "}
        </button>
      </form>
    </div>
  );
}

export default Addproject;
