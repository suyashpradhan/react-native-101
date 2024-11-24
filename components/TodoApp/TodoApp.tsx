import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {TodoForm} from "./TodoForm";
import {TodoList} from "./TodoList";
import {useState} from "react";

export const TodoApp = () => {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState("")

    return (
        <SafeAreaView>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Todo App</Text>
                <TodoForm setTodos={setTodos} text={text} setText={setText}/>
                <TodoList todos={todos} setTodos={setTodos}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        marginTop: 5,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 22,
        marginTop: 20,
        fontWeight: 'bold',
    },
})