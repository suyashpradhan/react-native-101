import {useEffect, useState} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import axios from "axios";
import {ProductCard} from "./ProductCard";

export interface ProductType {
    id: string,
    title: string,
    price: number,
    description?: string,
    category?: string,
    image: string,
    rating?: {
        rate?: number,
        count?: number
    }
}

export const EcommStore = () => {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        (async () => {
            const response = await axios('https://fakestoreapi.com/products?limit=10')
            const data = await response.data
            setProducts(data)
        })()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.productContainerText}>Products({products.length})</Text>
            {products.length > 0 && (
                <FlatList
                    data={products}
                    renderItem={({item}) => <ProductCard item={item}/>}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        marginTop: 5,
        paddingHorizontal: 20,
    },
    productContainer: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        marginTop: 8
    },
    productContainerText: {
        marginTop: 22,
        fontWeight: "bold",
        fontSize: 18,
    },
    cartButton: {
        borderWidth: 1,
        borderColor: "red",
        paddingVertical: 6,
        paddingHorizontal: 18,
        borderRadius: 5
    },
    cartButtonText: {
        color: "black",
    },
})