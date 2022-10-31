class ArtGallery{
    constructor(creator){
        this.creator = creator;
        this.possibleArticles = {
            picture: 200,
            photo: 50,
            item: 250
        }
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity){
        if(!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())){
            throw new Error("This article model is not included in this gallery!")
        }
        if(this.listOfArticles.includes(this.listOfArticles.find(x => x.articleName === articleName))){
            let article = this.listOfArticles.find(x => x.articleName === articleName);
            if(article.articleModel === articleModel.toLowerCase()){
                article.quantity += quantity;
                return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
            }
        } else {
            let newArticle = {
                articleModel: articleModel.toLowerCase(),
                articleName,
                quantity
            }
            this.listOfArticles.push(newArticle);
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
        }

        
    }

    inviteGuest(guestName, personality){
        if(this.guests.includes(this.guests.find(x => x.guestName === guestName))){
            throw new Error(`${guestName} has already been invited.`)
        } else {
            let points = 0;
            if(personality === "Vip"){
                points = 500;
            } else if (personality === "Middle"){
                points = 250;
            }
            let newGuest = {
                guestName,
                points,
                purchaseArticle: 0
            }
            this.guests.push(newGuest);

            return `You have successfully invited ${guestName}!`;
        }
    }

    buyArticle(articleModel, articleName, guestName){
        let article = this.listOfArticles.find(x => x.articleName === articleName);
        
        let guest = this.guests.find(x => x.guestName ===  guestName);
        if(!this.listOfArticles.includes(article) || article.articleModel !== articleModel.toLowerCase()){
            throw new Error("This article is not found.");
        }
        if(article.quantity === 0){
            return `The ${articleName} is not available.`;
        }
        if(!guest){
            return `This guest is not invited.`;
        }

        let pointsRequired = this.possibleArticles[articleModel.toLowerCase()];
        if(pointsRequired > guest.points){
            return "You need to more points to purchase the article.";
        } else {
            guest.points -= pointsRequired;
            article.quantity -= 1;
            guest.purchaseArticle++;

            return `${guest.guestName} successfully purchased the article worth ${pointsRequired} points.`;
        }


    }

    showGalleryInfo(criteria){
        let stringBuilder = "";
        if(criteria === "article"){
            stringBuilder += "Articles information:\n";
            for(let i = 0; i < this.listOfArticles.length; i++){
                stringBuilder += `${this.listOfArticles[i].articleModel} - ${this.listOfArticles[i].articleName} - ${this.listOfArticles[i].quantity}\n`;
            }
            return stringBuilder;
        } else if (criteria === "guest"){
            stringBuilder += "Guests information:\n";
            for(let i = 0; i < this.guests.length; i++){
                stringBuilder += `${this.guests[i].guestName} - ${this.guests[i].purchaseArticle}\n`;
            }
            return stringBuilder;
        }
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));

