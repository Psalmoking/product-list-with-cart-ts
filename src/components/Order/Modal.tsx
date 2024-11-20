interface Props {
  children: React.ReactNode;
}

export function Backdrop(props: Props) {
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-[rgba(0,0,0,0.5)]">
      {props.children}
    </div>
  );
}

export default function Modal(props: Props) {
  return (
    <Backdrop>
      <div className="bg-white p-6 rounded-md max-h-[30rem] max-w-[95%] shadow-[0px_0px_10px_rgba(0,0,0,0.2)]">{props.children}</div>;
    </Backdrop>
  );
}
