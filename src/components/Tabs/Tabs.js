import './tabs.css';

const TabsArr = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'history', label: 'History' },
  { id: 'insights', label: 'Insights' },
];

function Tabs({ activeTab }) {
  return (
    <div className="tab-btns-container">
      {TabsArr.map((TabObj) => (
        <button
          key={TabObj.id}
          className={`tab-btn ${TabObj.id === activeTab ? 'active' : ''}`}
        >
          {TabObj.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
