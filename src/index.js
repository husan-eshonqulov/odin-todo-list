import { loadApp } from "./components/app/app";
import { taskList } from './database/database'
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

loadApp(taskList);
