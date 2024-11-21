import {Pressable, StyleSheet, Text, View} from "react-native";

export const TodoList = ({todos, setTodos}: { todos: any, setTodos: any }) => {
    const hasAnyTodos = todos.length > 0

    return (
        <>
            {hasAnyTodos &&
                <>
                    <View style={styles.todoContainer}>
                        <Text style={styles.todoContainerText}>Your Todos ({todos.length})</Text>
                    </View>
                    <Todo todos={todos} setTodos={setTodos}/>
                </>
            }

        </>
    )
}

const Todo = ({todos, setTodos}: { todos: any, setTodos: any }) => {

    const deleteTodoHandler = (id: any) => {
        setTodos(todos.filter((todo: any) => todo.id !== id))
    }

    return (
        todos.map((todo: any) => {
            return (
                <View key={todo.id} style={styles.todoListContainer}>
                    <Text>Todo</Text>
                    <Pressable style={styles.todoDeleteButton} onPress={() => deleteTodoHandler(todo.id)}>
                        <Text style={styles.todoDeleteButtonText}>Delete</Text>
                    </Pressable>
                </View>
            )
        })
    )
}

export const styles = StyleSheet.create({
    todoContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        width: "100%",
    },
    todoListContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 8
    },
    todoContainerText: {
        marginTop: 22,
        fontWeight: "bold",
        fontSize: 18,
    },
    todoDeleteButton: {
        borderWidth: 1,
        borderColor: "red",
        paddingVertical: 6,
        paddingHorizontal: 18,
        borderRadius: 5
    },
    todoDeleteButtonText: {
        color: "black",
    },
    todoText: {
        color: "#FFF",
    },
})