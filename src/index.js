import { loadApp } from "./components/app/app";
import db from "./database/database";
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

const root = document.querySelector('#root');

loadApp(db, root);
