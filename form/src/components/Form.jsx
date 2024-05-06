import './Form.css';

import { useState } from 'react';

const Form = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState(0);
    const [favoriteColor, setFavoriteColor] = useState("");
    const [animal, setAnimal] = useState("");
    const [favoriteFood, setFavoriteFood] = useState([]);

    const handleInputChange = (e) => {
        const { name, value, checked } = e.target;

        switch (name) {
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'gender':
                setGender(value);
                break;
            case 'age':
                setAge(value);
                break;
            case 'favoriteColor':
                setFavoriteColor(value);
                break;
            case 'favoriteAnimal':
                setAnimal(value);
                break;
            case 'favoriteFood':
                setFavoriteFood(prevFoods => {
                    if (checked) {
                        return [...prevFoods, value];
                    } else {
                        return prevFoods.filter(food => food !== value);
                    }
                });
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("First name: ", firstName);
        console.log("Last name: ", lastName);
        console.log("Email: ", email);
        console.log("Gender: ", gender)
        console.log("Age: ", age);
        console.log("Favorite color: ", favoriteColor);
        console.log("Animal: ", animal);
        console.log("Favorite food: ", favoriteFood);
    }

    return (
        <div>
            <h1>Form</h1>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <label>First name:</label>
                    <input type="text" name="firstName" onChange={handleInputChange} />
                </div>

                <div>
                    <label>Last name:</label>
                    <input type="text" name="lastName" onChange={handleInputChange} />
                </div>

                <div>
                    <label>Email:</label>
                    <input type="email" name="email" onChange={handleInputChange} />
                </div>

                <div>
                    <label>Gender:</label>
                    <input type="radio" name="gender" id="genderMale" onChange={handleInputChange} value="male" />
                    <label for="genderMale">Male</label>
                    <input type="radio" name="gender" id="genderFemale" onChange={handleInputChange} value="female" />
                    <label for="genderFemale">Female</label>
                </div>

                <div>
                    <label>Age:</label>
                    <input type="number" name="age" min="1" max="150" inputMode="numeric" onChange={handleInputChange} />
                </div>

                <div>

                    <label>Favorite Color:</label>
                    <input type="color" name="favoriteColor" />
                </div>

                <div>

                </div>

                <label>Animal you like most:</label>
                <div>
                    <input type="radio" name="favoriteAnimal" value="dog" id="favoriteAnimalDog" onChange={handleInputChange} />
                    <label for="favoriteAnimalDog">Dog</label>
                </div>

                <div>
                    <input type="radio" name="favoriteAnimal" value="cat" id="favoriteAnimalCat" onChange={handleInputChange} />
                    <label for="favoriteAnimalCat">Cat</label>
                </div>

                <div>
                    <input type="radio" name="favoriteAnimal" value="other" id="favoriteAnimalOther" onChange={handleInputChange} />
                    <label for="favoriteAnimalOther">Other</label>
                    <input type="text" name="favoriteAnimal" hidden={animal === "other" ? false : true} onChange={handleInputChange} />
                </div>


                <label>Foods you like:</label>
                <div>
                    <input type="checkbox" name="favoriteFood" value="pizza" id="favoriteFoodPizza" onChange={handleInputChange} />
                    <label for="favoriteFoodPizza">Pizza</label>
                </div>

                <div>
                    <input type="checkbox" name="favoriteFood" value="pasta" id="favoriteFoodPasta" onChange={handleInputChange} />
                    <label for="favoriteFoodPasta">Pasta</label>
                </div>

                <div>
                    <input type="checkbox" name="favoriteFood" value="salad" id="favoriteFoodSalad" onChange={handleInputChange} />
                    <label for="favoriteFoodSalad">Salad</label>
                </div>

                <div>
                    <input type="checkbox" name="favoriteFood" value="hamburguer" id="favoriteFoodHamburguer" onChange={handleInputChange} />
                    <label for="favoriteFoodHamburguer">Hamburguer</label>
                </div>

                <button type='submit'>Submit</button>

            </form>
        </div>
    )
}

export default Form;