export const getAllDegimon = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => resolve(data))
    });
};

export const getDegimon = (url) => {
    return new Promise((resolve,reject)=> {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            resolve(data);
        })
    })
};