import React,{useState, useEffect} from 'react'
import { View, Text , SafeAreaView, Image, TouchableOpacity , FlatList } from 'react-native'
import { Searchbar } from 'react-native-paper';

export default function Explore({navigation}) {
  const data = [
    {
      id: 1,
      name: "Museo de la Ciudad",
      type: "museo",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Museo_del_Prado_2016_%2825185969599%29.jpg/800px-Museo_del_Prado_2016_%2825185969599%29.jpg",
    },
    {
      id: 2,
      name: "Parque Nacional Sundarbans",
      type: "parque nacional",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Museo_del_Prado_2016_%2825185969599%29.jpg/800px-Museo_del_Prado_2016_%2825185969599%29.jpg",
    },
    {
      id: 3,
      name: "Templo de Kalighat",
      type: "templo",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Museo_del_Prado_2016_%2825185969599%29.jpg/800px-Museo_del_Prado_2016_%2825185969599%29.jpg",
    },
  ];
  
  const categotia = [
    {
      id:1,
      name: "Popular",
    },
    {
      id:2,
      name: "Lake",
    },
    {
      id:3,
      name: "beach",
    },
    {
      id:4,
      name: "Mountain",
    }
  ]
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [searchQuery]);

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView>
    <View>
      <Searchbar
       
        placeholder="Search"
        onChange={onChangeSearch}
        value={searchQuery}
      />
    </View>
    <FlatList
    data={categotia}
    keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View >
              <TouchableOpacity  >
                <Text >{item.name}</Text>
              </TouchableOpacity>
              </View>
            );
          }}
          horizontal/>
    <View >
        <Text>Lugares turisticos</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              
              <TouchableOpacity >
                <Image  source={{ uri: item.image }} />
                <Text>{item.name}</Text>
                <Text>{item.type}</Text>
              </TouchableOpacity>
            );
          }}
          horizontal
        />
      
    </View>

    
  </SafeAreaView>
  )
}
