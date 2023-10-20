import axios from "axios";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { IDeviceData } from "../../types/admin";
import { URL } from "../../consts/consts";

import classes from "./Admin.module.scss";
import MyText from "../../components/UI/text/MyText";
import MyInput from "../../components/UI/input/MyInput";
import MyButton from "../../components/UI/button/MyButton";
import MyTitle from "../../components/UI/title/MyTitle";
import Select from "react-select";
import { useBrand } from "../../hooks/useProducts";
import { useCatalog } from "../../hooks/useCatalog";

function AddDevice() {
    const { data: brands } = useBrand("all");
    const { data: catalogs } = useCatalog();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [deviceData, setDeviceData] = useState<IDeviceData>({
        name: "",
        price: 0,
        brand: "",
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
            formData.append("brand", String(deviceData.brand));
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
        <div className={classes.addDevice}>
            <MyTitle>Добавить товар</MyTitle>
            <div className={classes.settings}>
                <MyText>Фоточка</MyText>
                <MyInput
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                />
            </div>
            <div className={classes.settings}>
                <MyText>Название Товара</MyText>
                <MyInput
                    type="text"
                    placeholder="Название"
                    value={deviceData.name}
                    onChange={(e) =>
                        setDeviceData((prew: IDeviceData) => {
                            const copyPrew = { ...prew };
                            copyPrew.name = e.target.value;
                            return copyPrew;
                        })
                    }
                />
            </div>
            <div className={classes.settings}>
                <MyText>Цена Товара</MyText>
                <MyInput
                    type="number"
                    placeholder="Цена..."
                    value={deviceData.price}
                    onChange={(e) =>
                        setDeviceData((prew: IDeviceData) => {
                            const copyPrew = { ...prew };
                            copyPrew.price = +e.target.value;
                            return copyPrew;
                        })
                    }
                />
            </div>
            <div className={classes.settings}>
                <MyText>Брэнд товара</MyText>
                <Select
                    onChange={(e) =>
                        setDeviceData((prew: IDeviceData) => {
                            const copyPrew = { ...prew };
                            if (e && "value" in e) {
                                copyPrew.brand = e.value;
                            }
                            return copyPrew;
                        })
                    }
                    options={brands?.map((item) => ({
                        value: item,
                        label: item,
                    }))}
                />
            </div>
            <div className={classes.settings}>
                <MyText>Тип Товара</MyText>
                <Select
                    onChange={(e) =>
                        setDeviceData((prew: IDeviceData) => {
                            const copyPrew = { ...prew };
                            if (e && "value" in e) {
                                copyPrew.type_id = +e.value;
                            }
                            console.log(copyPrew);
                            return copyPrew;
                        })
                    }
                    options={catalogs?.map((item) => ({
                        value: item.id,
                        label: item.name,
                    }))}
                />
            </div>
            <MyButton onClick={handleUpload}>Добавить</MyButton>
        </div>
    );
}
export default AddDevice;
