import { CardProfile } from "../components/CardProfile";

export function App() {
  
function calcAge(birth: string) {
  const dateNow = new Date().getTime();
  const dateBirth = new Date(birth).getTime();
  const userAge = dateNow - dateBirth;
  return Math.floor(userAge / (1000 * 60 * 60 * 24 * 365.25));
}

const dataAPI = [
  { id: 1, name: "Du",birth: "01-01-1992" },
  { id: 2, name: "dudu",birth: "04-08-2004" },
  { id: 3, name: "Edu",birth: "06-06-1995" },
  { id: 4, name: "dudin",birth:"04-30-1993" },
];

  return (
    <>
      <h1>class -02-components</h1>

      {dataAPI.map(({ id, name, birth }) => {
        return (
          <CardProfile key={id} name={name} birth={birth} calcAge={calcAge} />
        );
      })}
    </>
  );
}
