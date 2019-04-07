document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript loaded');


const formInput = document.querySelector('#new-item-form');

const handleFormInput = function(evt){
  evt.preventDefault();

  const countryList = document.querySelector('#country-list');
  const countryDiv = document.createElement('div');
  countryList.appendChild(countryDiv);
  // Country
  const countryHeading = document.createElement('h3');
  countryDiv.appendChild(countryHeading);
  countryHeading.textContent = `Country: ${evt.target.country.value}`;

  // Capital city
  const capitalCity = document.createElement('p');
  countryDiv.appendChild(capitalCity);
  capitalCity.textContent = `Capital City: ${evt.target.capital_city.value}`;

  // Language
  const language = document.createElement('p');
  countryDiv.appendChild(language);
  language.textContent = `Main Language Spoken: ${evt.target.language.value}`;

  // Local Delicacy
  const localDelicacy = document.createElement('p');
  countryDiv.appendChild(localDelicacy);
  localDelicacy.textContent = `Local Delicacy: ${evt.target.local_delicacy.value}`;

  formInput.reset();
};

formInput.addEventListener('submit', handleFormInput);

const deleteAllButton = document.querySelector('#delete_all');

const countryList = document.querySelector('#country-list');

const deleteCountryList = function(evt){
  while (countryList.firstChild) {
    countryList.removeChild(countryList.firstChild);
  };
};
deleteAllButton.addEventListener('click', deleteCountryList);


});
