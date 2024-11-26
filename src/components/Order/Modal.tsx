import { useAppDispatch } from "../../hooks/hooks";
import { modalActions } from "../../store/modal";

interface Props {
  children: React.ReactNode;
}

export function Backdrop(props: Props) {
  const dispatch = useAppDispatch();

  const hideModalHandler = () => {
    dispatch(modalActions.hideModal());
  }
  
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-[rgba(0,0,0,0.5)]" onClick={hideModalHandler}>
      {props.children}
    </div>
  );
}

export default function Modal(props: Props) {
  return (
    <Backdrop>
      <div className="bg-white p-6 rounded-lg max-h-[30rem] max-w-[95%] shadow-[0px_0px_10px_rgba(0,0,0,0.2)] z-20">{props.children}</div>;
    </Backdrop>
  );
}
