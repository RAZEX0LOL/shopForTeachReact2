import React from "react";
import {useState, useEffect,createContext,useContext} from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Footer from "./components/Footer";
import "./index.scss";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

const AppContext = createContext();

export default function App() {

  const [items,setItems]=useState([
    {
      id:1,
      title:'iPhone 15 256GB',
      img:'iPhone15.jpg',
      desc:'Вышедший осенью 2023 года iPhone 15 Plus - это стильный и современный смартфон, пришедший на смену iPhone 14 Plus. Он сохранил все сильные стороны, но стал лучше и является отличным вариантом iPhone с большим 6,7-дюймовым экраном, мощным процессором A16 Bionic и современной 48-Мегапиксельной камерой, созданным для всех, кто не желает переплачивать за возможности Pro-серии, которые нужны далеко не каждому.',
      category:'Apple',
      price:'999'
    },
    {
      id:2,
      title:'iPhone 15 Pro Max 1TB',
      img:'iPhone15ProMax.jpg',
      desc:'Новый корпус, новые возможности камеры, более мощный процессор и разъём USB-C – это лишь основные нововведения iPhone 15 Pro Max. Самый большой и технически совершенный айфон 15-й серии станет идеальным гаджетом для любых задач и отличным инструментом для покорения соцсетей и видеохостингов. Всех, кто пропустил 14-е поколение, ждут дополнительные приятные изменения в виде таких фишек как Always-On, динамический остров и 48-Мегапиксельная основная камера, а улучшенная автономность позволит реже думать о зарядке.',
      category:'Apple',
      price:'1499'
    },
    {
      id:3,
      title:'Samsung S24 Ultra 1TB',
      img:'SamsungS24Ultra.jpg',
      desc:'Galaxy S24 Ultra, как и другие модели линейки – не просто смартфон. В Samsung сделали упор на умные функции с использованием нейросетей и сервисов, чтобы улучшить пользовательский опыт и раскрыть подлинные возможности мощного аппаратного обеспечения устройства. При этом смартфон сохранил сильные стороны предыдущих моделей и ключевые особенности линейки Ultra.',
      category:'Samsung',
      price:'1599'
    },
    {
      id:4,
      title:'Samsung Z Fold 5 1TB',
      img:'SamsungZFold5.jpg',
      desc:'Galaxy Z Fold5 – это дверь в мир современных технологий. Он мощный, стильный и заменяет сразу смартфон и планшет. С пером S pen (приобретается отдельно) вы можете дать волю своему таланту. Новый шарнирный механизм без зазора, улучшенные характеристики и доведённый до совершенства интерфейс One UI делают этот пятое поколение практически совершенным, обеспечивая уникальный пользовательский опыт.',
      category:'Samsung',
      price:'1699'
    },
    {
      id:5,
      title:'Беспроводной вертикальный пылесос Dyson',
      img:'DysonCleaner.jpeg',
      desc:'Dyson производят уже ставшие легендарными пылесосы, и V12 Detect Slim Motorhead можно смело отнести к их числу. Лазер подсветит невидимую пыль, пьезодатчик автоматически увеличит мощность при необходимости, а убедиться в отличном результате работы можно на LCD-экране.',
      category:'Dyson',
      price:'699'
    },
    {
      id:6,
      title:'Очиститель-увлажнитель воздуха Dyson',
      img:'DysonQ2Cleaner.jpeg',
      desc:'Для комфортной жизни нужно много вещей, и особое внимание нужно уделить базовым потребностям: чистому, свежему, влажному и прохладному воздуху. Можно, конечно, поставить несколько устройств: увлажнитель, очиститель и вентилятор и превратить помещение в небольшой склад не самой красивой техники. А можно довериться Dyson, которые предлагают решить все эти задачи с помощью одного устройства.',
      category:'Dyson',
      price:'1199'
    },
    {
      id:7,
      title:'Nothing Phone (2) 512GB',
      img:'NothingPhone2.jpg',
      desc:'Такой же стильный. Такой же удобный. Такой же узнаваемый. Второе поколение Nothing Phone во многом основано на первой модели. Не став изобретать велосипед, разработчики уделили внимание характеристикам и улучшению пользовательского опыта, поэтому Nothing Phone (2) получил более мощный современный процессор, потрясающий экран и новые глифы, а интерфейс фирменной оболочки стал ещё удобнее и порадует любителей кастомизации.',
      category:'Nothing',
      price:'699'
    },
    {
      id:8,
      title:'Nothing Phone 2a 512GB',
      img:'NothingPhone2A.avif',
      desc:'Погрузитесь в мир безграничных возможностей. 6,7-дюймовый AMOLED-дисплей с частотой обновления 120 Гц дарит плавную картинку, а прозрачная крышка и светодиодные ленты Glyph подчеркнут ваш неповторимый стиль. Мощный процессор MediaTek Dimensity 7200 Pro справится с любой задачей, а емкий аккумулятор 5000 мАч обеспечит автономность на весь день. 50-мегапиксельные камеры запечатлеют каждый момент вашей жизни, а Nothing OS 2.0 на базе Android 14 подарит новый уровень пользовательского опыта.',
      category:'Nothing',
      price:'399'
    },
    {
      id:9,
      title:'Macbook Air 15 M3 8/512GB',
      img:'MacbookAirM3.jpeg',
      desc:'Apple MacBook Air 15 оснащается восьмиядерным чипом M3 с интегрированной десятиядерной графикой. Кроме того, чип включает в себя быстрый и эффективный 16-ядерный процессор Neural Engine для работы с ИИ. В сравнении с моделью на M1 производительность выросла на 60%.Устройство оснащено дисплеем Liquid Retina с яркостью до 500 нит, поддерживает подключение до двух внешних дисплеев. Еще есть Wi-Fi 6E, зарядка MagSafe, два порта Thunderbolt и разъём 3,5 мм.Время автономной работы до 18 часов в режиме просмотра видео в Apple TV. ',
      category:'Apple',
      price:'1099'
    },
    {
      id:10,
      title:'Ноутбук игровой MSI Raider GE78HX i9-13980HX/64 ГБ/2 ТБ/RTX 4090/Черный',
      img:'MSIRaider.avif',
      desc:'Игровой ноутбук MSI Raider GE78 HX 13VI-206RU (MS-17S1) — модель в пластиковом корпусе черного цвета, которая поставляется с предустановленной ОС Windows 11 «Домашняя». За высокую вычислительную мощность отвечает 24-ядерный процессор Intel Core i9 13980HX с тактовой частотой 4,0 ГГц, увеличивающейся до 5,6 ГГц. Кэш-память равна 36 Мб, оперативная памяти — 64 Гб. За выдачу детализированной графики отвечает GeForce RTX 4090 от Nvidia объемом 16 Гб. Встроенная камера на 2 Мп позволяет быть участником видеоконференций. На экране диагональю 17 дюймов (43,2 см), выполненном по технологии IPS-level, отображается изображение разрешением 2560х1600 пикселей.',
      category:'MSI',
      price:'4299'
    }
  ]);
  const [orders,setOrders]=useState([
]);
  const [currentItems,setCurrentItems]=useState([]);
  const [showFullItem,setShowFullItem]=useState(false);
  const [fullItem,setFullItem]=useState({});

  useEffect(()=>{
    setCurrentItems(items);
  },[items]);

  const deleteOrder = (id) =>{
    setOrders(orders.filter((el)=> el.id!==id));
  }

  const addToOrder=(item)=>{
    if(!orders.some((el)=>el.id===item.id)){
      setOrders([...orders,item]);
    }//добавление товара, но одного типа

    //setOrders([...orders,item]); без if неограниченное количество товаров одного типа
  }

  const chooseCategory = (category)=>{
    if(category==="all"){
      setCurrentItems(items);
    }
    else{
      setCurrentItems(items.filter((el)=>el.category===category));
    }
  }

  const onShowItem = (item) =>{
    setFullItem(item);
    setShowFullItem(!showFullItem);
  }

  return (
    <AppContext.Provider
      value={
        {
          items,
          setItems,
          orders,
          setOrders,
          currentItems,
          setCurrentItems,
          showFullItem,
          setShowFullItem,
          fullItem,
          setFullItem,
          deleteOrder,
          addToOrder,
          chooseCategory,
          onShowItem,
        }
      }
    >
      <div className="wrapper">
        <Header/>
        <Categories/>
        <Items/>
        {showFullItem && <ShowFullItem/>}
        <Footer />
      </div>
    </AppContext.Provider>
  );
}