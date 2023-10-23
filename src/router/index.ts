import Login from "../pages/Auth/Login";
import Admin from "../pages/Admin/Admin";
import Registration from "../pages/Auth/Registration";
import Basket from "../pages/Basket/Basket";
import Catalog from "../pages/Catalog/Catalog";
import Product from "../pages/Product/Product";
import Products from "../pages/Products/Products";
import AddDevice from "../pages/Admin/AddDevice";
import DeleteDevice from "../pages/Admin/DeleteDevice";

type TypeRouter = {
    path: string;
    component: React.ComponentType;
    index?: boolean;
}

export const router: TypeRouter[] = [
    {
        path: 'basket',
        component: Basket,
        index: false,
    },
    {
        path: 'admin',
        component: Admin,
        index: false,
    },
    {
        path: 'admin/addDevice',
        component: AddDevice,
        index: false,
    },
    {
        path: 'admin/deleteDevice',
        component: DeleteDevice,
        index: false,
    },
    {
        path: 'login',
        component: Login,
        index: false,
    },
    {
        path: 'registration',
        component: Registration,
        index: false,
    },
    {
        path: ':type',
        component: Products,
        index: false,
    },
    {
        path: ':type/:id',
        component: Product,
        index: false,
    },
    {
        path: '',
        index: true,
        component: Catalog
    }
]