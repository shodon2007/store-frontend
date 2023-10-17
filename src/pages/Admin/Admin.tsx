import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import { IDeviceData } from "../../types/admin";
import { toast } from "react-toastify";
import { URL } from "../../consts/consts";

function AddDevice() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [deviceData, setDeviceData] = useState<IDeviceData>({
        name: "",
        price: 0,
        brand_id: 0,
        type_id: 0,
    });

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        setSelectedFile(file || null);
    };

    const handleUpload = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append("image", selectedFile);
            formData.append("name", deviceData.name);
            formData.append("price", String(deviceData.price));
            formData.append("brand", String(deviceData.brand_id));
            formData.append("type", String(deviceData.type_id));
            console.log(formData);
            console.log(deviceData);

            axios
                .post(`${URL}/admin/addDevice`, formData)
                .then(() => {
                    toast.success("Успешно добавлено");
                })
                .catch(() => {
                    toast.error("Ошибка на твоем серваке");
                });
        } else {
            toast.error("бля ты выбери файл!!!!");
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <input
                type="text"
                placeholder="Название"
                value={deviceData.name}
                onChange={(e) =>
                    setDeviceData((prew) => {
                        const copyPrew = { ...prew };
                        copyPrew.name = e.target.value;
                        return copyPrew;
                    })
                }
            />
            <input
                type="number"
                placeholder="Цена..."
                value={deviceData.price}
                onChange={(e) =>
                    setDeviceData((prew) => {
                        const copyPrew = { ...prew };
                        copyPrew.price = +e.target.value;
                        return copyPrew;
                    })
                }
            />
            <input
                type="number"
                placeholder="Брэнд..."
                value={deviceData.brand_id}
                onChange={(e) =>
                    setDeviceData((prew) => {
                        const copyPrew = { ...prew };
                        copyPrew.brand_id = +e.target.value;
                        return copyPrew;
                    })
                }
            />
            <input
                type="number"
                placeholder="Тип..."
                value={deviceData.type_id}
                onChange={(e) =>
                    setDeviceData((prew) => {
                        const copyPrew = { ...prew };
                        copyPrew.type_id = +e.target.value;
                        return copyPrew;
                    })
                }
            />
            <button onClick={handleUpload}>Добавить</button>
        </div>
    );
}

function Admin() {
    return (
        <div>
            <AddDevice />
        </div>
    );
}

export default Admin;
