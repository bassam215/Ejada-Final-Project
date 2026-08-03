
function CategoryTabs({ activeTab, setActiveTab }) {
        const tabs = ["man", "woman", "boy", "child"]; 
         return (
    <div className="flex justify-center gap-6">

      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-8 py-3 border transition

          ${
            activeTab === tab
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
        {tab}
        </button>
      ))}

    </div>
  );
}

export default CategoryTabs;