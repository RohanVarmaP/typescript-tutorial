export type quizType = {
    "quiz_id": string,
    "quiz_name": string,
    "quiz_published": boolean,
    "questions": string[]
}
export type homeDataType = {
    "username": string,
    "single_attempt_completed_quizzes": quizType[],
    "fully_attempted_quizzes": quizType[],
    "not_attempted_quizzes": quizType[]
}

export type marksType = {
    "marks_id": string,
    "user": {
        "user_id": string,
        "username": string,
        "email": string,
        "role": {
            "role_id": string,
            "role_name": string
        }
    },
    "quiz": quizType,
    "marks": number
}

export type rankingDataType = {
    "quiz_name": string,
    "results": marksType[]
}

type questionOnlyType = {
    "question_id": string,
    "question": string,
    "option_a": string,
    "option_b": string,
    "option_c": string,
    "option_d": string,
    'correct_answer': string | null
}

export type questionType = {
    "question": questionOnlyType,
    "user_answer": {
        "useranswer": string
    },
    "is_correct": boolean
}
export type quizDatatype = {
    "username": string,
    "quiz_name": string,
    "questions": { question: Omit<questionOnlyType, 'correct_answer'> }[]
}
export type reviewDatatype = {
    "username": string,
    "quiz_name": string,
    "questions": questionType[]
}

export const homeData: homeDataType = {
    "username": "user1",
    "single_attempt_completed_quizzes": [
        {
            "quiz_id": "9bceb998-6a37-4951-b2ae-561831cab3ab",
            "quiz_name": "Science & Nature",
            "quiz_published": true,
            "questions": [
                "0222eefa-26f5-45b9-a57e-fa6d00b1ac09",
                "046d1930-c081-4d64-923b-311ced57c39c",
                "39b9f3ff-4397-49a8-94db-91223b18299d",
                "4bd59033-2547-4e04-9e26-0abd1e6326c2",
                "4f5b8efc-b3bc-4489-bb56-8c7039492e10",
                "703fb2f5-6c39-469d-978b-313b549f3778",
                "7cf249f4-b330-470f-bdd6-4a00f35d470b",
                "a0677438-a461-4e0a-acd3-dbfe85971bbf",
                "baaa1cc0-1b14-4b54-9b90-76e26542a39d",
                "baf53816-f119-4515-b797-9049c3234a7f",
                "bee8f6bc-e9f5-48e8-a06f-1fefbce49edd",
                "d13e048a-e3d0-43d0-a807-e87582f9160c",
                "dc422b65-33b5-42a6-8490-b73d55596d2d"
            ]
        },
        {
            "quiz_id": "2b8e84ec-6ecd-4df3-9eb7-b59297642f45",
            "quiz_name": "World Facts",
            "quiz_published": true,
            "questions": [
                "25f193c0-395a-4420-8b4a-826aef535864",
                "5279398d-72ab-4b65-bf28-6d425a1c2b64",
                "57769d11-2a21-4029-a061-96290816642a",
                "8ce23931-0a46-4811-a23d-f36134301f70",
                "8d0d328f-c99e-45db-80ee-70343479f9a8",
                "903560a9-75bb-4be9-a291-2f4c7eefc1b8",
                "92d727d5-c6cf-47f6-8f82-61448aa38234",
                "afc7ddad-2571-4d6d-882e-a636922e6f4c",
                "c0068413-0694-4402-86ec-51bccdec218d",
                "c5cd5d81-badc-4325-acd8-50a04d1abc3f",
                "d8a9d022-1860-46d1-aca2-396833152322",
                "db31efcd-58dd-4922-82c8-6425b0543c4c",
                "fe2f9c59-81ce-40ef-8133-951c5cbefc16"
            ]
        }
    ],
    "fully_attempted_quizzes": [{
        "quiz_id": "15b42ced-4b56-4b80-87df-78b3d5917ba6",
        "quiz_name": "Creative Thinking",
        "quiz_published": true,
        "questions": [
            "0a77cd85-f142-4a34-8807-bbc3501cd8f0",
            "1b5015e2-ff96-4d31-b33a-2756c401ccc2",
            "2efcc3a4-0358-4832-8aea-9c0bf9e919d5",
            "34c97cdd-f6ab-4360-a5d6-0aa07519b495",
            "35e8c0a0-aeff-4471-ae8c-e888f731a950",
            "391be3ee-ee5a-4005-af47-db8eff621cdd",
            "51d2ce19-3916-4119-b330-04112cc8ee30",
            "521faec2-3b7e-4870-a715-00c1e7e2d3be",
            "59aa3a9f-2fc1-4d99-96cd-fc3ea008695d",
            "79faf049-8796-4f80-af25-b9631adfe335",
            "949bf433-bb5a-4fc7-a72f-12d796926d0f",
            "d29ecf42-e50a-403d-82d7-955f8baf1d7d"
        ]
    }],
    "not_attempted_quizzes": [

        {
            "quiz_id": "0b150ff2-cdda-4fee-ba87-e82bd2c6c3dd",
            "quiz_name": "Literature & Arts",
            "quiz_published": true,
            "questions": [
                "01621001-de08-4c8a-b3b1-7c9b6329864c",
                "43b05620-8c8a-4c97-a64d-ad770ca4cae0",
                "63c0b845-5859-4b20-8c40-6fff918956d3",
                "6b960a27-d29a-4449-9660-b7f440fcdb64",
                "6e2e376f-48d5-4e75-99ce-a77c63795b22",
                "979abb11-b42b-4b39-a762-218492ff029a",
                "9d3c88cf-757e-4ee3-a60c-29392641490c",
                "b4156573-d15e-4741-8e6b-4b83e1c1008a",
                "c8bbbf69-fa19-4c6b-a5b7-a5e345b1dfef",
                "cb37f0bb-5835-4fa4-b8f4-739d49beea01",
                "ce8ef6da-b59a-4d63-9688-e58b7fdbdda5",
                "e0563296-e4a2-43c4-a993-8e72f209b9bc"
            ]
        }
    ]
}

export const rankingData: rankingDataType = {
    "quiz_name": "Science & Nature",
    "results": [
        {
            "marks_id": "2c3ddc22-d224-4acc-ae81-c391efa47346",
            "user": {
                "user_id": "905fb028-3857-4ee4-b782-f4cbfb02c7fd",
                "username": "user1",
                "email": "",
                "role": {
                    "role_id": "e860d52d-6cd8-4d5e-81ee-c10a294d0a67",
                    "role_name": "student"
                }
            },
            "quiz": {
                "quiz_id": "9bceb998-6a37-4951-b2ae-561831cab3ab",
                "quiz_name": "Science & Nature",
                "quiz_published": true,
                "questions": [
                    "0222eefa-26f5-45b9-a57e-fa6d00b1ac09",
                    "046d1930-c081-4d64-923b-311ced57c39c",
                    "39b9f3ff-4397-49a8-94db-91223b18299d",
                    "4bd59033-2547-4e04-9e26-0abd1e6326c2",
                    "4f5b8efc-b3bc-4489-bb56-8c7039492e10",
                    "703fb2f5-6c39-469d-978b-313b549f3778",
                    "7cf249f4-b330-470f-bdd6-4a00f35d470b",
                    "a0677438-a461-4e0a-acd3-dbfe85971bbf",
                    "baaa1cc0-1b14-4b54-9b90-76e26542a39d",
                    "baf53816-f119-4515-b797-9049c3234a7f",
                    "bee8f6bc-e9f5-48e8-a06f-1fefbce49edd",
                    "d13e048a-e3d0-43d0-a807-e87582f9160c",
                    "dc422b65-33b5-42a6-8490-b73d55596d2d"
                ]
            },
            "marks": 69
        },
        {
            "marks_id": "55810436-1be4-419b-b6a7-0c1ffa7a0e8b",
            "user": {
                "user_id": "c1c85d40-4563-4a4a-8304-10348856085b",
                "username": "user2",
                "email": "",
                "role": {
                    "role_id": "e860d52d-6cd8-4d5e-81ee-c10a294d0a67",
                    "role_name": "student"
                }
            },
            "quiz": {
                "quiz_id": "9bceb998-6a37-4951-b2ae-561831cab3ab",
                "quiz_name": "Science & Nature",
                "quiz_published": true,
                "questions": [
                    "0222eefa-26f5-45b9-a57e-fa6d00b1ac09",
                    "046d1930-c081-4d64-923b-311ced57c39c",
                    "39b9f3ff-4397-49a8-94db-91223b18299d",
                    "4bd59033-2547-4e04-9e26-0abd1e6326c2",
                    "4f5b8efc-b3bc-4489-bb56-8c7039492e10",
                    "703fb2f5-6c39-469d-978b-313b549f3778",
                    "7cf249f4-b330-470f-bdd6-4a00f35d470b",
                    "a0677438-a461-4e0a-acd3-dbfe85971bbf",
                    "baaa1cc0-1b14-4b54-9b90-76e26542a39d",
                    "baf53816-f119-4515-b797-9049c3234a7f",
                    "bee8f6bc-e9f5-48e8-a06f-1fefbce49edd",
                    "d13e048a-e3d0-43d0-a807-e87582f9160c",
                    "dc422b65-33b5-42a6-8490-b73d55596d2d"
                ]
            },
            "marks": 46
        }
    ]
}



export const quizData: quizDatatype = {
    "username": "user1",
    "quiz_name": "Science & Nature",
    "questions": [
        {
            "question": {
                "question_id": "0222eefa-26f5-45b9-a57e-fa6d00b1ac09",
                "question": "What is the capital of France?",
                "option_a": "Paris",
                "option_b": "London",
                "option_c": "Berlin",
                "option_d": "Rome"
            }
        },
        {
            "question": {
                "question_id": "046d1930-c081-4d64-923b-311ced57c39c",
                "question": "Which number is a prime?",
                "option_a": "2",
                "option_b": "4",
                "option_c": "6",
                "option_d": "8"
            }
        },
        {
            "question": {
                "question_id": "39b9f3ff-4397-49a8-94db-91223b18299d",
                "question": "Who wrote the book '1984'",
                "option_a": "George Orwell",
                "option_b": "J.K. Rowling",
                "option_c": "Mark Twain",
                "option_d": "Ernest Hemingway"
            }
        },
        {
            "question": {
                "question_id": "4bd59033-2547-4e04-9e26-0abd1e6326c2",
                "question": "What is the capital of Japan?",
                "option_a": "Tokyo",
                "option_b": "Beijing",
                "option_c": "Seoul",
                "option_d": "Bangkok"
            }
        },
        {
            "question": {
                "question_id": "4f5b8efc-b3bc-4489-bb56-8c7039492e10",
                "question": "What is the capital of France?",
                "option_a": "Paris",
                "option_b": "London",
                "option_c": "Berlin",
                "option_d": "Rome"
            }
        },
        {
            "question": {
                "question_id": "703fb2f5-6c39-469d-978b-313b549f3778",
                "question": "What color do you get when you mix Blue and Green?",
                "option_a": "Cyan",
                "option_b": "Red",
                "option_c": "Orange",
                "option_d": "Violet"
            }
        },
        {
            "question": {
                "question_id": "7cf249f4-b330-470f-bdd6-4a00f35d470b",
                "question": "Which number is a prime?",
                "option_a": "11",
                "option_b": "10",
                "option_c": "12",
                "option_d": "14"
            }
        },
        {
            "question": {
                "question_id": "a0677438-a461-4e0a-acd3-dbfe85971bbf",
                "question": "Who wrote the book 'The Hobbit'",
                "option_a": "J.R.R. Tolkien",
                "option_b": "C.S. Lewis",
                "option_c": "Stephen King",
                "option_d": "Dan Brown"
            }
        },
        {
            "question": {
                "question_id": "baaa1cc0-1b14-4b54-9b90-76e26542a39d",
                "question": "Which number is a prime?",
                "option_a": "17",
                "option_b": "15",
                "option_c": "20",
                "option_d": "21"
            }
        },
        {
            "question": {
                "question_id": "baf53816-f119-4515-b797-9049c3234a7f",
                "question": "Who wrote the book 'Hamlet'",
                "option_a": "William Shakespeare",
                "option_b": "Arthur Conan Doyle",
                "option_c": "Oscar Wilde",
                "option_d": "Leo Tolstoy"
            }
        },
        {
            "question": {
                "question_id": "bee8f6bc-e9f5-48e8-a06f-1fefbce49edd",
                "question": "What color do you get when you mix White and Black?",
                "option_a": "Gray",
                "option_b": "Blue",
                "option_c": "Red",
                "option_d": "Green"
            }
        },
        {
            "question": {
                "question_id": "d13e048a-e3d0-43d0-a807-e87582f9160c",
                "question": "Which number is a prime?",
                "option_a": "17",
                "option_b": "15",
                "option_c": "20",
                "option_d": "21"
            }
        },
        {
            "question": {
                "question_id": "dc422b65-33b5-42a6-8490-b73d55596d2d",
                "question": "What color do you get when you mix White and Black?",
                "option_a": "Gray",
                "option_b": "Blue",
                "option_c": "Red",
                "option_d": "Green"
            }
        }
    ]
}

export const reviewData: reviewDatatype = {
    "username": "user1",
    "quiz_name": "Science & Nature",
    "questions": [
        {
            "question": {
                "question_id": "0222eefa-26f5-45b9-a57e-fa6d00b1ac09",
                "question": "What is the capital of France?",
                "option_a": "Paris",
                "option_b": "London",
                "option_c": "Berlin",
                "option_d": "Rome",
                "correct_answer": null
            },
            "user_answer": {
                "useranswer": "A"
            },
            "is_correct": true
        },
        {
            "question": {
                "question_id": "046d1930-c081-4d64-923b-311ced57c39c",
                "question": "Which number is a prime?",
                "option_a": "2",
                "option_b": "4",
                "option_c": "6",
                "option_d": "8",
                "correct_answer": null
            },
            "user_answer": {
                "useranswer": "A"
            },
            "is_correct": true
        },
        {
            "question": {
                "question_id": "39b9f3ff-4397-49a8-94db-91223b18299d",
                "question": "Who wrote the book '1984'",
                "option_a": "George Orwell",
                "option_b": "J.K. Rowling",
                "option_c": "Mark Twain",
                "option_d": "Ernest Hemingway",
                "correct_answer": null
            },
            "user_answer": {
                "useranswer": "D"
            },
            "is_correct": false
        },
        {
            "question": {
                "question_id": "4bd59033-2547-4e04-9e26-0abd1e6326c2",
                "question": "What is the capital of Japan?",
                "option_a": "Tokyo",
                "option_b": "Beijing",
                "option_c": "Seoul",
                "option_d": "Bangkok",
                "correct_answer": null
            },
            "user_answer": {
                "useranswer": "A"
            },
            "is_correct": true
        },
        {
            "question": {
                "question_id": "4f5b8efc-b3bc-4489-bb56-8c7039492e10",
                "question": "What is the capital of France?",
                "option_a": "Paris",
                "option_b": "London",
                "option_c": "Berlin",
                "option_d": "Rome",
                "correct_answer": null
            },
            "user_answer": {
                "useranswer": "A"
            },
            "is_correct": true
        },
        {
            "question": {
                "question_id": "703fb2f5-6c39-469d-978b-313b549f3778",
                "question": "What color do you get when you mix Blue and Green?",
                "option_a": "Cyan",
                "option_b": "Red",
                "option_c": "Orange",
                "option_d": "Violet",
                "correct_answer": null
            },
            "user_answer": {
                "useranswer": "D"
            },
            "is_correct": false
        },
        {
            "question": {
                "question_id": "7cf249f4-b330-470f-bdd6-4a00f35d470b",
                "question": "Which number is a prime?",
                "option_a": "11",
                "option_b": "10",
                "option_c": "12",
                "option_d": "14",
                "correct_answer": null
            },
            "user_answer": {
                "useranswer": "A"
            },
            "is_correct": true
        },
        {
            "question": {
                "question_id": "a0677438-a461-4e0a-acd3-dbfe85971bbf",
                "question": "Who wrote the book 'The Hobbit'",
                "option_a": "J.R.R. Tolkien",
                "option_b": "C.S. Lewis",
                "option_c": "Stephen King",
                "option_d": "Dan Brown",
                "correct_answer": null
            },
            "user_answer": {
                "useranswer": "C"
            },
            "is_correct": false
        },
        {
            "question": {
                "question_id": "baaa1cc0-1b14-4b54-9b90-76e26542a39d",
                "question": "Which number is a prime?",
                "option_a": "17",
                "option_b": "15",
                "option_c": "20",
                "option_d": "21",
                "correct_answer": null
            },
            "user_answer": {
                "useranswer": "A"
            },
            "is_correct": true
        },
        {
            "question": {
                "question_id": "baf53816-f119-4515-b797-9049c3234a7f",
                "question": "Who wrote the book 'Hamlet'",
                "option_a": "William Shakespeare",
                "option_b": "Arthur Conan Doyle",
                "option_c": "Oscar Wilde",
                "option_d": "Leo Tolstoy",
                "correct_answer": null
            },
            "user_answer": {
                "useranswer": "B"
            },
            "is_correct": false
        },
        {
            "question": {
                "question_id": "bee8f6bc-e9f5-48e8-a06f-1fefbce49edd",
                "question": "What color do you get when you mix White and Black?",
                "option_a": "Gray",
                "option_b": "Blue",
                "option_c": "Red",
                "option_d": "Green",
                "correct_answer": null
            },
            "user_answer": {
                "useranswer": "A"
            },
            "is_correct": true
        },
        {
            "question": {
                "question_id": "d13e048a-e3d0-43d0-a807-e87582f9160c",
                "question": "Which number is a prime?",
                "option_a": "17",
                "option_b": "15",
                "option_c": "20",
                "option_d": "21",
                "correct_answer": null
            },
            "user_answer": {
                "useranswer": "A"
            },
            "is_correct": true
        },
        {
            "question": {
                "question_id": "dc422b65-33b5-42a6-8490-b73d55596d2d",
                "question": "What color do you get when you mix White and Black?",
                "option_a": "Gray",
                "option_b": "Blue",
                "option_c": "Red",
                "option_d": "Green",
                "correct_answer": null
            },
            "user_answer": {
                "useranswer": "A"
            },
            "is_correct": true
        }
    ]
}