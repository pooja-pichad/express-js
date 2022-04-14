# flat_list = []
# for sublist in t:
#     for item in sublist:
#         flat_list.append(item)
#         print(flat_list)


# flat_list = []
# for sublist in t:
#     for item in sublist:
#         flat_list.appen


# user=int(input("enter a number "))
# i=0
# count=0
# c=0
# c1=0
# while i<(user):
#     if user ==100:
#         count+=1
#     if user==500:
#         c+=1
#     if user==1000:
#         c1+=1
#     i=i+1
# print(count)
# # print(c)
# # print(c1)
# i=i+1


# i=0
# while i<5:
#     # i=i+1
#     print(i*i)
#     i=i+1

# year=int(input("enter a number "))
# if year%4==0 and year%100 or year==400:
#     print(True)
# else:
#     print(False)
    

word_freq_dict = {"Hello": 56,
                  "at": 23,
                  "test": 43,
                  "this": 43}
key_to_be_deleted = 'at'
new_dict = {}
for key, value in word_freq_dict.items():
    if key is not key_to_be_deleted:
        new_dict[key] = value
word_freq_dict = new_dict
print(word_freq_dict)