function MySelf({ name, age, gender, religion }) {
  return (
    <div>
      <h1 className="bg-pink-400 pt-10 pb-10 justify-center flex">
        My name is {name}. I am {age} years old. I am a {gender}. I am a{" "}
        {religion}{" "}
      </h1>
    </div>
  );
}

export default MySelf;
