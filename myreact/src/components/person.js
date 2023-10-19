import React from "react";

function person({person}) {
  return (
    <div>
      <h1>
        I'm {person.name} of age {person.age} with a skill {person.skill}
      </h1>
    </div>
  );
}

export default person;
