const baseUrl = "http://localhost:8070"

export interface Vehicle {
    id: number;
    name: string;
  }

const vehicles = [
    { id: 1, name: "Civic" },
    { id: 2, name: "Kadet" },
    { id: 3, name: "Fusca" },
    { id: 4, name: "Opala" },
    { id: 5, name: "Ka" },
]

const getVehicles = async () => {
    // return fetch(`${baseUrl}/vehicle`)
    return vehicles
}

const callService = async (vehicleId: number, serviceName: string) => {
    // return fetch(`${baseUrl}/vehicle/${vehicleId}/${serviceName.toLowerCase()}`)


    console.log(serviceName, vehicleId, vehicleId == 1)

    if (serviceName == "IPVA") {
        if (vehicleId == 1) {
            return { status: true }
        } else {
            return { status: false }
        }
    } else if (serviceName == "DPVAT") {
        return { status: false }
    }
}

export default {
    getVehicles,
    callService
}