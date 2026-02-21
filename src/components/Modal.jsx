export const Modal = ({isOpen, onClose, header, mainText, buttonOnclick}) => {
    if (!isOpen) return null;

    return (<div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn"
            onClick={onClose}
        >
            <div
                className="bg-[#161c26] p-6 rounded-xl shadow-xl max-w-md border border-gray-700 transform transition-all duration-300 scale-100 hover:scale-105"
                onClick={(e) => e.stopPropagation()}
            >
                <h3 className="text-xl font-bold text-white mb-4">{header}</h3>
                <p className="text-gray-300 mb-6">
                    {mainText}
                </p>
                <div className="flex justify-end space-x-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                        Закрыть
                    </button>
                    <button
                        onClick={() => {
                            buttonOnclick();
                            onClose();
                        }}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                    >
                        Перейти к контактам
                    </button>
                </div>
            </div>
        </div>);
};