
// src/components/Form
import React from "react";

function Form({
  firstName,
  lastName,
  handleFirstNameChange,
  handleLastNameChange,
}) {
  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;


// <==============================================================================>


// import React, { useState } from "react";

// function Form() {
//   const [firstName, setFirstName] = useState("John");
//   const [lastName, setLastName] = useState("Henry");
//   const [newsletter, setNewsletter] = useState(false);

// function handleFirstNameChange(e) {
//   setFirstName(e.target.value)
// }

// function handleLastNameChange(e) {
//   setLastName(e.target.value)
// }

// function handleNewsletterChange(e) {
//   // .checked, not .value!
//   setNewsletter(e.target.checked);
// }

//   return (
//     <>
//       <form>
//         <input type="text" onChange={handleFirstNameChange} value={firstName} />
//         <input type="text" onChange={handleLastNameChange} value={lastName} />
//         <button type="submit">Submit</button>
//       </form>
//       <form>
//         <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
//         <input
//           type="checkbox"
//           id="newsletter"
//           onChange={handleNewsletterChange}

//           checked={newsletter}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }

// export default Form;
