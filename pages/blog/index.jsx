import Image from "next/image";
// import Card from "../../components/ui/Card";

export default function Pets() {
  return (
    <div className="one">
      
      {["1", "2", "3", "4",'5'].map((path) => {
        return (
          <div className="two" key={path}>
            <Image src={`/${path}.jpg`}  width="800px" height="500px" />
          </div>
        );
      })}
    </div>
  );
}
