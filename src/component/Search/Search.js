import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Text,Button, View, StyleSheet, TextInput,Image,ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function Search() {
    const navigation = useNavigation();
    var arrayImage = [
        {
            image1 : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5',
            image2 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/274723232_2095406903969072_7504427080082865401_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EsmoPEH_cXcAX93Nk7C&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_WQtH6UxmmJyYIrNZrOIN0p6-DnwuiGywVckLUbv7SuQ&oe=62BD1DD7',
            image3 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/269688330_2385746111566438_4170126394801980165_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y0Atite1IcEAX90zGu4&_nc_oc=AQkHB2NKoObp3yuSoV7lmesWyjeTNh0MklZp-JfuxZmX1byke2VeXvzjDmSeBWQdnaeyqzCmaeg95UjLMg4y846S&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8iGo-P-vpB1laU_1DAfq9zUxugYO7rsij2es-YCBiStQ&oe=62BD9E18'
        },
        {
            image1 : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5',
            image2 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/274723232_2095406903969072_7504427080082865401_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EsmoPEH_cXcAX93Nk7C&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_WQtH6UxmmJyYIrNZrOIN0p6-DnwuiGywVckLUbv7SuQ&oe=62BD1DD7',
            image3 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/269688330_2385746111566438_4170126394801980165_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y0Atite1IcEAX90zGu4&_nc_oc=AQkHB2NKoObp3yuSoV7lmesWyjeTNh0MklZp-JfuxZmX1byke2VeXvzjDmSeBWQdnaeyqzCmaeg95UjLMg4y846S&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8iGo-P-vpB1laU_1DAfq9zUxugYO7rsij2es-YCBiStQ&oe=62BD9E18'
        },
        {
            image1 : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5',
            image2 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/274723232_2095406903969072_7504427080082865401_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EsmoPEH_cXcAX93Nk7C&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_WQtH6UxmmJyYIrNZrOIN0p6-DnwuiGywVckLUbv7SuQ&oe=62BD1DD7',
            image3 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/269688330_2385746111566438_4170126394801980165_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y0Atite1IcEAX90zGu4&_nc_oc=AQkHB2NKoObp3yuSoV7lmesWyjeTNh0MklZp-JfuxZmX1byke2VeXvzjDmSeBWQdnaeyqzCmaeg95UjLMg4y846S&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8iGo-P-vpB1laU_1DAfq9zUxugYO7rsij2es-YCBiStQ&oe=62BD9E18'
        },
        {
            image1 : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5',
            image2 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/274723232_2095406903969072_7504427080082865401_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EsmoPEH_cXcAX93Nk7C&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_WQtH6UxmmJyYIrNZrOIN0p6-DnwuiGywVckLUbv7SuQ&oe=62BD1DD7',
            image3 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/269688330_2385746111566438_4170126394801980165_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y0Atite1IcEAX90zGu4&_nc_oc=AQkHB2NKoObp3yuSoV7lmesWyjeTNh0MklZp-JfuxZmX1byke2VeXvzjDmSeBWQdnaeyqzCmaeg95UjLMg4y846S&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8iGo-P-vpB1laU_1DAfq9zUxugYO7rsij2es-YCBiStQ&oe=62BD9E18'
        },
        {
            image1 : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5',
            image2 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/274723232_2095406903969072_7504427080082865401_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EsmoPEH_cXcAX93Nk7C&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_WQtH6UxmmJyYIrNZrOIN0p6-DnwuiGywVckLUbv7SuQ&oe=62BD1DD7',
            image3 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/269688330_2385746111566438_4170126394801980165_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y0Atite1IcEAX90zGu4&_nc_oc=AQkHB2NKoObp3yuSoV7lmesWyjeTNh0MklZp-JfuxZmX1byke2VeXvzjDmSeBWQdnaeyqzCmaeg95UjLMg4y846S&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8iGo-P-vpB1laU_1DAfq9zUxugYO7rsij2es-YCBiStQ&oe=62BD9E18'
        },
        {
            image1 : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5',
            image2 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/274723232_2095406903969072_7504427080082865401_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EsmoPEH_cXcAX93Nk7C&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_WQtH6UxmmJyYIrNZrOIN0p6-DnwuiGywVckLUbv7SuQ&oe=62BD1DD7',
            image3 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/269688330_2385746111566438_4170126394801980165_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y0Atite1IcEAX90zGu4&_nc_oc=AQkHB2NKoObp3yuSoV7lmesWyjeTNh0MklZp-JfuxZmX1byke2VeXvzjDmSeBWQdnaeyqzCmaeg95UjLMg4y846S&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8iGo-P-vpB1laU_1DAfq9zUxugYO7rsij2es-YCBiStQ&oe=62BD9E18'
        },
        {
            image1 : 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/274876629_2826541607639210_363529317853290439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HdI0cCt0Q3wAX_5XJCE&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-EuusFTe6O_0EhmxL3lfl3fe-vR-9i-UVqvuXBFrKYiw&oe=62BCB4F5',
            image2 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/274723232_2095406903969072_7504427080082865401_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EsmoPEH_cXcAX93Nk7C&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_WQtH6UxmmJyYIrNZrOIN0p6-DnwuiGywVckLUbv7SuQ&oe=62BD1DD7',
            image3 : 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/269688330_2385746111566438_4170126394801980165_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y0Atite1IcEAX90zGu4&_nc_oc=AQkHB2NKoObp3yuSoV7lmesWyjeTNh0MklZp-JfuxZmX1byke2VeXvzjDmSeBWQdnaeyqzCmaeg95UjLMg4y846S&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8iGo-P-vpB1laU_1DAfq9zUxugYO7rsij2es-YCBiStQ&oe=62BD9E18'
        },
    ];
    return(
        <ScrollView style = {styles.SearchContainer}>
            {/* Header Search */}
            <View style={styles.Search} >
                <Fontisto name="search" size={20} color="white" style = {{marginLeft : 10,marginTop : 10}} onPress = {(e) =>{navigation.navigate('SearchDetails')}}/>
                <Text style={styles.TextSearch} onPress = {(e) =>{navigation.navigate('SearchDetails')}}>Search</Text>
            </View>
            {/* List Recomend Search */}
            {arrayImage.map(item => (
                <View style={styles.RecommendSearch}>
                    <Image source = {{uri : item.image1}} style = {styles.ImageShow}/>
                    <Image source = {{uri : item.image2}} style = {styles.ImageShow}/>
                    <Image source = {{uri : item.image3}} style = {styles.ImageShow}/> 
                </View>
            ))}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    SearchContainer : {
        backgroundColor : 'black',
    },
    Search: {
        flexDirection : 'row',
        marginTop : '2%',
        width: '92%',
        height: 40,
        marginLeft: '4%',
        backgroundColor: '#1F2739',
        borderRadius: 10,
    },
    TextSearch: {
        width : '100%',
        color: '#8e8e8e',
        fontSize: 15,
        marginLeft: 10,
        marginTop: 10,
    },
    RecommendSearch: {
        flexDirection : 'row',
        marginTop : '2%',
        width: '96%',
        marginLeft: '1%',
    },
    ImageShow: {
        width : '32.5%',
        height : 120,
        marginLeft : 5
    }
});