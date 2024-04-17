// import Button from '../button/button.component';

interface IFooterCellProps {
  buttonTitle: string;
  buttonAction: () => void;
}

export const FooterCell = ({buttonTitle, buttonAction}: IFooterCellProps) => (
  <div className="py-5 px-5">
    <button
      onClick={(e) => {
        e.stopPropagation();
        buttonAction();
      }}
      // variant="primary"
    //   icon={
    //     <svg
    //       className="w-4 h-4 fill-current opacity-50 shrink-0"
    //       viewBox="0 0 16 16"
    //     >
    //       <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
    //     </svg>
    //   }
    >
      {buttonTitle}
    </button>
  </div>
);