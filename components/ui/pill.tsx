export default function Pill(props: { label: string; onClick?: () => void }) {
   return (
      <div
         onClick={props.onClick}
         className="border cursor-pointer hover:bg-gray-100 transition-colors px-3 py-2 w-max rounded-full border-primary text-primary"
      >
         <p className="whitespace-nowrap">{props.label}</p>
      </div>
   );
}
