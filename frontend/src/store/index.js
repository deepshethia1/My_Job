import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import reducer from './reducer';

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = configureStore({ reducer: reducer });
const persister = 'Free';

const useAppDispatch = () => useDispatch();
const useAppSelector = useSelector;

export { store, persister, useAppDispatch, useAppSelector };
