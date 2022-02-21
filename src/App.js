import { ChakraProvider } from "@chakra-ui/react";
import Rotas from "./Routes";

function App() {
  return (
    <ChakraProvider>
      <Rotas/>
    </ChakraProvider>
  )
}

export default App;






























// import LoginScreen from './components/loginScreen';
// import TransactionForm from './components/transactionForm';
// import TransactionList from './components/TransactionsList';
// import TransactionMoney from './components/TransactionMoney';
// import TransactionHeader from './components/TransactionHeader';

// function App() {
//   const [ ListTransactions,setListTransactions ] = useState([]);
//   const [ screen,setScreen ] = useState(false);
//   const [ filtro,setFiltro ] = useState("todos");

//   const changeScreen = () => {
//     setScreen(!screen)
//   };

//   const transactionWindows = () => {
//     return (
//       <div>
//           <header className='transaction-header'> 
//             <TransactionHeader onClick={ changeScreen }/>
//           </header>
//           <main className='transaction--main'>
//             <section>
//               <TransactionForm ListTransactions={ListTransactions} setListTransactions={setListTransactions} />
//               {ListTransactions.length !== 0?<TransactionMoney ListTransactions={ListTransactions} filtro={filtro}/>:console.log("lista Vazia")}
//             </section>
//             <section className='trasactiionLList'>
//               <TransactionList ListTransactions={ListTransactions} setListTransactions={setListTransactions} filtro={filtro} setFiltro={setFiltro}/> 
//             </section>
//           </main>
//       </div>
//     )
//   }
//   return (
//     <div className="App">
//       {screen === false?<LoginScreen onClick={ changeScreen }/>:transactionWindows()}
//     </div>
//   );
// }