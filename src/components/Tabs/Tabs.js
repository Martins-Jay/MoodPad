import './tabs.css';

const TabsArr = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'history', label: 'History' },
];

function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="tab-btns-container">
      {TabsArr.map((TabObj) => (
        <button
          key={TabObj.id}
          className={`tab-btn ${TabObj.id === activeTab ? 'active' : ''}`}
          onClick={() => setActiveTab(TabObj.id)}
        >
          {TabObj.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
