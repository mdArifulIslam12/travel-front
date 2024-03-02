import { useState } from "react";


const Calender = () => {

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    return (
        <div>
            <div className="relative w-72  rounded-sm">
                <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="calendar-input block w-full h-12 px-4 py-2 border-[1px] text-gray-600 bg-white border-gray-300 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Select Date"
                />
            </div>
        </div>
    );
};

export default Calender;