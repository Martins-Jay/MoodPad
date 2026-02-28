function NavFilterButton({ filterType, activefilter, setActiveFilter }) {
  function handleTabSwitch() {
    setActiveFilter(filterType.id);
  }

  return (
    <button
      className={`nav-history-btn ${activefilter === filterType.id ? 'active' : 'inactive'} `}
      onClick={handleTabSwitch}
    >
      {filterType.label}
    </button>
  );
}

export default NavFilterButton;
