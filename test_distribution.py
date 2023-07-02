import itertools

v1 = [1,1,4,1,1,1,2,1,3]
v2 = [3,3,3,2,2,3,3,2,1]
v3 = [2,1,5,1,1,5,2,2,4]
v4 = [3,2,4,1,1,5,1,2,2]
v5 = [1,1,1,2,1,1,1,1,2]
v6 = [2,2,4,1,2,2,3,2,2]
v7 = [2,1,2,2,2,5,3,2,1]
v8 = [3,2,3,1,2,5,3,1,4]
v9 = [1,2,4,1,1,1,2,2,3]
v10 = [3,2,6,1,2,5,2,1,2]
v11 = [3,2,1,1,1,4,2,1,3]
v12 = [1,3,3,1,1,1,1,2,1]
vids = [v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12]

qa1 = [1,2,3]
qa2 = [1,2,3]
qa3 = [1,2,3,4,5,6]
qa4 = [1,2,3]
qa5 = [1,2]
qa6 = [1,2,3,4,5]
qa7 = [1,2,3]
qa8 = [1,2]
qa9 = [1,2,3,4]
qa10 = [1,2,3,4,5]
qas = [qa1,qa2,qa3,qa4,qa5,qa6,qa7,qa8,qa9,qa10]

combinations = list(itertools.product(qa1, qa2, qa3, qa4, qa5, qa6, qa7, qa8, qa9, qa10))

result_dict = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0}

for combination in combinations:
    matches = 0
    mat_vid = 0
    num1 = 2941
    num2 = 2941
    num3 = 2941
    num4 = 2941
    num5 = 2941
    num6 = 2941
    if combination[-1] == 1:
        num1 = 0
        num2 = 1

    elif combination[-1] == 2:
        num1 = 2


    elif combination[-1] == 3:
        num1 = 3
        num2 = 4


    elif combination[-1] == 4:
        num1 = 5


    else:
        num1 = 6
        num2 = 7
        num3 = 8


    nums = [num1,num2,num3,num4,num5,num6]

    for vid_num, vid in enumerate(vids):
        matching_indexes = [index for index, value in enumerate(vid) if value in combination[:-1] and combination[:-1].index(value) == index]
        
        for num in nums:
            if num in matching_indexes:
                matching_indexes.append(2941)
        
        len_match = len(matching_indexes)
        if vid_num+1 == 3:
            len_match -= 1
        #elif vid_num+1 == 5 or vid_num+1 == 1 or vid_num+1 == 2:
            #len_match += 0.5

        if len_match > matches:
            matches = len(matching_indexes)
            mat_vid = vid_num+1
        elif len_match == matches:
            if matching_indexes.count(2941) > 0:
                matches = len(matching_indexes)
                mat_vid = vid_num+1

    result_dict[mat_vid] += 1

print(result_dict)