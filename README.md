# Project Name: AnimalInfo Angular2 Application


TODO: Write a project description

## Installation

Run the following commands to install necessary dependencies on your system.

```console
$npm install
```

```console
$bower install
```
Running the command:
```console
$gulp build
```
Now you can run the command:
```console
$gulp serve
```
To run the server locally.
Navigate to the server: localhost:3000 to preview your website.


With these dependencies you should have what you need to get up and running!

## Specification

| Specification        | Input          | Output  |
| ------------- |:-------------:| -----:|         
| Application displays particular animal's information. | | Species: Northwest Black Taild Bear |
| Allow the user to add an animal to the list. | Species: Ocelote, Name: Prince, Age: 4, .... | Species: Ocelote, Name: Prince, Age: 4, .... |
| Allow the user to update an animal's info. | Age: 4 | Age: 5 |
| Allow the user to show entries based on age | Young Animals | Species: Arctic Fox | Name: Moon Age: 2, Diet: Carnivore Current Zoo, Location: Northern Trail, Current Number of Caretakers: 5, Sex: Female, Likes: Cool shade, Dislikes: Loud noises |

## Usage

This is a demonstration of the power of Angular2!

## Upcoming Features

1. Instead of listing the number of caretakers for a specific animal. It makes more sense to list out the names of the caretakers.
The next patch will include a section that lists their names, as well as how many caretakers there are for a specific animal in captivity.

2. Update the GUI by adding bootstrap components, make it look nice.

3. I would like a monthly calender widget somewhere on this page.

4. Add images for each animal.

5. Make it user friendly!

6. Make it nice to look at.

7. 

8. I'll add more to this list as they come..

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## TODO

1. Inside the form to add an animal, center the labels and inputs using css or a scss.
2. SASS
3. Add filter by Diet

## Current Bugs

1. When adding a new animal, selecting the diet (Carnivore, Herbivore, Omnivore) returns the number 1, 2, or 3 depending on which one is clicked.
2. After clicking Edit, form appears, however fields aren't empty as intended.  These should be placeholders.

## License

The MIT License

Copyright <2017> <Ethan Luts>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
