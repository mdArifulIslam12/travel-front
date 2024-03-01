import { useState } from "react";


const Calender = () => {

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    return (
        <div>
            <div className="relative">
                <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="calendar-input block w-full px-4 py-2 rounded-md border-[1px] text-gray-600 bg-white border-gray-300 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Select Date"
                />
            </div>
        </div>
    );
};

export default Calender;