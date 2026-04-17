
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function CreateAccount() {
  return (
  <ScrollView style={{ backgroundColor: "white" }}>
  <View style={{ padding: 16, marginTop: 60 }}>


  <Text style={{ fontSize: 46, fontWeight: "bold", textAlign: "center" }}>
        Create your Account
   </Text>

    <Text style={{ textAlign: "center", color: "gray", marginTop: 12, fontSize: 16 }}>
          By Continuing, you agree to our{" "}
   <Text style={{ color: "orange" }}>Terms of Service</Text>
          {" "}and{" "}
    <Text style={{ color: "orange" }}>Privacy Policy</Text>
          . We use bank-level security to protect your data.
    </Text>

        
    <View style={{ flexDirection: "row", justifyContent: "center", gap: 16, marginTop: 28 }}>
          
        <TouchableOpacity style={{
            borderWidth: 1, borderColor: "#ddd", borderRadius: 10,
            padding: 12, width: 60, alignItems: "center"
        }}>
            <Text></Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            borderWidth: 1, borderColor: "#ddd", borderRadius: 10,
            padding: 12, width: 60, alignItems: "center"
          }}>
          <Text></Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            borderWidth: 1, borderColor: "#ddd", borderRadius: 10,
            padding: 12, width: 60, alignItems: "center"
          }}>
            <Text></Text>
          </TouchableOpacity>

        </View>

      
        <Text style={{ textAlign: "center", color: "gray", marginVertical: 20 }}>
          Or continue with
        </Text>

      
        <Text style={{ fontSize: 13, color: "gray", marginBottom: 6 }}>Full name</Text>
        <TextInput
          placeholder="OXLABS"
          style={{
            borderWidth: 1, borderColor: "#ddd", borderRadius: 10,
            padding: 12, fontSize: 15, marginBottom: 16
          }}  
          />
          <View style={{
            borderWidth: 1, borderColor: "#ddd", borderRadius: 10,
            padding: 12, justifyContent: "center"
          }}>
            <Text>PK +92 ▾</Text>
          </View>

          
          <TextInput
            placeholder=""
            keyboardType="phone-pad"
            style={{
              flex: 1, borderWidth: 1, borderColor: "#ddd",
              borderRadius: 10, padding: 12, fontSize: 15
            }}/>
        
        
        <Text style={{ fontSize: 13, color: "gray", marginTop: 16, marginBottom: 6 }}>Passcode</Text>
        <TextInput
          placeholder="acde"
          secureTextEntry={true}
          style={{
            borderWidth: 1, borderColor: "white", borderRadius: 10,
            padding: 12, fontSize: 15
          }}
        />
        <Text style={{ fontSize: 11, color: "gray", marginTop: 4 }}>
          Should be at least 8 characters
        </Text>

      
        <TouchableOpacity style={{
          backgroundColor: "#E8521A", borderRadius: 30,
          padding: 16, alignItems: "center", marginTop: 28
        }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            Create account
          </Text>
        </TouchableOpacity>

        
        <Text style={{ textAlign: "center", marginTop: 16, color: "gray" }}>
          Already have an account?{" "}
          <Text style={{ color: "#E8521A", fontWeight: "bold" }}>Login</Text>
        </Text>
        <Text style={{ textAlign: "center", color: "black", fontSize: 16, marginTop: 40 }}>
          🌐 ENG
        </Text>
        <Text style={{ textAlign: "center", color: "black", fontSize: 16 }}>
          © 2026, oxlabs Admin.
        </Text>

      </View>
    </ScrollView>
  );
}
 