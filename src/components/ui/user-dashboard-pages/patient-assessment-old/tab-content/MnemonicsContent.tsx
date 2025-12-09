export const MnemonicsContent = ({ category }: any) => {
  return (
    <div className="space-y-6 ">
      {category.tabContent.mnemonics.map((mnemonic: any, index: any) => (
        <div
          key={index}
          className={`bg-${mnemonic.color}-50 p-6  rounded-lg border border-${mnemonic.color}-200`}
        >
          <h4 className={`font-semibold text-${mnemonic.color}-800 mb-3`}>
            {mnemonic.title}
          </h4>
          <div className="space-y-2 text-sm">
            {mnemonic.items.map((item: any, itemIndex: any) => (
              <div key={itemIndex} className={`text-${mnemonic.color}-700`}>
                <strong>{item.letter}</strong> - {item.description}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
