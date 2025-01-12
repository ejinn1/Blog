interface ChipProps {
  label: string;
  className: string;
  onClick: () => void;
}

const Chip = ({ label, className, onClick }: ChipProps) => {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Chip;
